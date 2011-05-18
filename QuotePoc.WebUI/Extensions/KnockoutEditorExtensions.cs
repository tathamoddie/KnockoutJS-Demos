using System;
using System.Linq.Expressions;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace QuotePoc.WebUI.Extensions
{
    public static class KnockoutEditorExtensions
    {
        public static MvcHtmlString KnockoutEditorFor<TModel, TValue>(this HtmlHelper<TModel> html, Expression<Func<TModel, TValue>> expression, string binding)
        {
            #warning This method is a horrible, horrible hack that needs to die quickly. It is only implemented this way to serve the needs of the time-boxed POC.

            var originalEditorHtml = html.EditorFor(expression).ToHtmlString();

            var knockoutEditorHtml = originalEditorHtml
                .Replace("<input ", string.Format("<input data-bind=\"{0}\" ", binding))
                .Replace(" id=\"", " id=\"Lives[${i}].")
                .Replace(" name=\"", " name=\"Lives[${i}].");

            return new MvcHtmlString(knockoutEditorHtml);
        }
    }
}