using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace QuotePoc.WebUI.Models
{
    public class Quote : IValidatableObject
    {
        public IEnumerable<Life> Lives { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (Lives != null &&
                !Lives.Any(l => l.FirstName.Equals("Tom", StringComparison.OrdinalIgnoreCase)))
                yield return new ValidationResult("At least one person must be named Tom", new[] {"Lives"});
        }
    }
}