using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Oppgave3.Model
{
    public class Kategori
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string tittel { get; set; }

        [Required]
        public List<FAQ> faqs { get; set; }
    }
}