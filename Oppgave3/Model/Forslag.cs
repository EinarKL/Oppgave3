using System.ComponentModel.DataAnnotations;

namespace Oppgave3.Model
{
    public class Forslag
    {
        [Key]
        public int id { get; set; }

        [Required]
        [RegularExpression("^([a-zA-Z]{2,30})$")]
        public string navn { get; set; }

        [Required]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$")]
        public string epost { get; set; }

        [Required]
        [RegularExpression("^(.{10,200})$")]
        public string spørsmål { get; set; }
    }
}