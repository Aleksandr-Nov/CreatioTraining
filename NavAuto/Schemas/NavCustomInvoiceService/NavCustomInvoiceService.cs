using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Factories;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    [ServiceContract]
    public class NavCustomInvoiceService : BaseService
    {
		/// <summary>
		/// Проставляет выбранным счетам статус [Оплачен].
        /// </summary>
        /// <param name="request">Id выбранных счетов в таблице деталей</param>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public CloseInvoicesResponse CloseInvoices(CloseInvoicesRequest request)
        {
            var response = new CloseInvoicesResponse();
            try
            {
                var userConnection = UserConnection;
                var invoiceSchema = userConnection.EntitySchemaManager.GetInstanceByName("NavInvoice");
                foreach (var invoiceId in request.InvoiceIds)
                {
                    var invoice = invoiceSchema.CreateEntity(userConnection);
                    if (invoice.FetchFromDB(invoiceId))
                    {
                        invoice.SetColumnValue("NavFact", true);
                        invoice.Save();
                    }
                }
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.ErrorMessages = ex.Message;
            }
            return response;
        }
    }

    public class CloseInvoicesRequest
    {
        public List<Guid> InvoiceIds { get; set; }
    }

    public class CloseInvoicesResponse
    {
        public bool Success { get; set; }
		
		public string ErrorMessages { get; set; }
    }
}
