using System;
using System.ComponentModel.DataAnnotations;

namespace QuotePoc.WebUI.Models
{
    public class Life
    {
        public string Title { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Date of Birth")]
        public DateTime DateOfBirth { get; set; }
    }
}