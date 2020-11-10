using Oppgave3.Model;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Oppgave3.DAL
{
    public class FAQRepository : IFAQRepository
    {
        private readonly FAQContext _db;
        private readonly ILogger<FAQRepository> _log;

        public FAQRepository(FAQContext db, ILogger<FAQRepository> log)
        {
            _db = db;
            _log = log;
        }

        [HttpGet]
        public async Task<List<Kategori>> HentKategorier()
        {
            try
            {
                var kategorier = await _db.Kategorier.ToListAsync();
                _log.LogInformation("Kategorier hentet");
                return kategorier;
            }
            catch (Exception exp)
            {
                _log.LogInformation("HentKategorier feilet: " + exp.Message);
                return null;
            }
        }

        [HttpGet]
        public async Task<List<FAQ>> HentFAQer()
        {
            try
            {
                var faqer = await _db.FAQs.ToListAsync();
                _log.LogInformation("FAQer hentet");
                return faqer;
            }
            catch (Exception exp)
            {
                _log.LogInformation("HentFAQer feilet: " + exp.Message);
                return null;
            }
        }

        [HttpPost]
        public async Task<bool> EndreFAQ([FromBody] FAQ enFAQ)
        {
            try
            {
                FAQ faq = _db.FAQs.Find(enFAQ.id);

                _log.LogInformation("Endret faq: " + faq.rating + " til: " + enFAQ.rating);

                if (faq != null)
                {
                    faq.rating = enFAQ.rating;
                }
                else return false;

                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception exp)
            {
                _log.LogInformation("EndreFAQ feilet: " + exp.Message);
                return false;
            }
        }

        [HttpGet]
        public async Task<List<Forslag>> HentForslag()
        {
            try
            {
                var forslag = await _db.Forslag.ToListAsync();
                _log.LogInformation("Forslag hentet");
                return forslag;
            }
            catch (Exception exp)
            {
                _log.LogInformation("HentForslag feilet: " + exp.Message);
                return null;
            }
        }

        [HttpPost]
        public async Task<int> LagreForslag([FromBody] Forslag etForslag)
        {
            EntityEntry<Forslag> forslag;
            try
            {
                forslag = _db.Forslag.Add(new Forslag
                {
                    navn = etForslag.navn,
                    epost = etForslag.epost,
                    spørsmål = etForslag.spørsmål
                });

                _log.LogInformation("Lagret forslag: " + etForslag.navn + " - " + etForslag.spørsmål);

                await _db.SaveChangesAsync();
                return forslag.Entity.id;
            }
            catch (Exception exp)
            {
                _log.LogInformation("LagreForslag feilet: " + exp.Message);
                return -1;
            }
        }
    }
}