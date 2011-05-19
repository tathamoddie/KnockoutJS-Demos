using System;
using System.ComponentModel.DataAnnotations;

namespace QuotePoc.WebUI.Models
{
    public class Life
    {
        [Required]
        [StringLength(5, MinimumLength = 2)]
        public string Title { get; set; }

        [Display(Name = "First Name")]
        [Required]
        [StringLength(10, MinimumLength = 3)]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [Required]
        [StringLength(10, MinimumLength = 3)]
        public string LastName { get; set; }

        [Display(Name = "Date of Birth")]
        [Required]
        public DateTime? DateOfBirth { get; set; }
    }
}