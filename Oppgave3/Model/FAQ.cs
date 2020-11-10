using System.ComponentModel.DataAnnotations;

namespace Oppgave3.Model
{
    public class FAQ
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string spørsmål { get; set; }

        [Required]
        public string svar { get; set; }

        [Required]
        public int rating { get; set; }
    }
}