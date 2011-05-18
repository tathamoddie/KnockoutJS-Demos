using System.Net.Mime;
using System.Web.Mvc;
using QuotePoc.WebUI.Models;

namespace QuotePoc.WebUI.Controllers
{
    public class QuoteController : Controller
    {
        [HttpGet]
        public ActionResult Quote()
        {
            return View(new Quote());
        }

        [HttpPost]
        public ActionResult Quote(Quote quote)
        {
            return Json(quote, MediaTypeNames.Text.Plain, JsonRequestBehavior.AllowGet);
        }
    }
}