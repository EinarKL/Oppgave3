using Microsoft.AspNetCore.Mvc;
using Oppgave3.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Oppgave3.DAL
{
    public interface IFAQRepository
    {
        Task<List<Kategori>> HentKategorier();

        Task<List<FAQ>> HentFAQer();

        Task<bool> EndreFAQ([FromBody] FAQ faq);

        Task<List<Forslag>> HentForslag();

        Task<int> LagreForslag([FromBody] Forslag forslag);
    }
}