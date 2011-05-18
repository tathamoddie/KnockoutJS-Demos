using System.Web.Mvc;

namespace QuotePoc.WebUI.Controllers
{
    public class QuoteController : Controller
    {
        public ActionResult Quote()
        {
            return View();
        }
    }
}