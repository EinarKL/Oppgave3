using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Oppgave3.DAL;
using Oppgave3.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Oppgave3.Controllers
{
    [Route("[controller]/[action]")]
    public class FAQController : ControllerBase
    {
        private readonly IFAQRepository _db;
        private readonly ILogger<FAQController> _log;

        public FAQController(IFAQRepository db, ILogger<FAQController> log)
        {
            _db = db;
            _log = log;
        }

        [HttpGet]
        public async Task<ActionResult> HentKategorier()
        {
            List<Kategori> kategorier = await _db.HentKategorier();

            return Ok(kategorier);
        }

        [HttpGet]
        public async Task<ActionResult> HentFAQer()
        {
            List<FAQ> faqer = await _db.HentFAQer();

            return Ok(faqer);
        }

        [HttpPost]
        public async Task<ActionResult> EndreFAQ([FromBody] FAQ faq)
        {
            if (ModelState.IsValid)
            {
                bool returOK = await _db.EndreFAQ(faq);
                if (!returOK)
                {
                    return NotFound("FAQ ble ikke endret");
                }
                return Ok("FAQ endret");
            }
            _log.LogInformation("Feil i inputvalidering");
            return BadRequest("Feil i inputvalidering på server");
        }

        [HttpGet]
        public async Task<ActionResult> HentForslag()
        {
            List<Forslag> forslag = await _db.HentForslag();

            return Ok(forslag);
        }

        [HttpPost]
        public async Task<ActionResult> LagreForslag([FromBody] Forslag forslag)
        {
            if (ModelState.IsValid)
            {
                int id = await _db.LagreForslag(forslag);
                if (id == -1)
                {
                    return NotFound("Forslag ble ikke lagret");
                }
                return Ok("Forslag lagret");
            }
            _log.LogInformation("Feil i inputvalidering");
            return BadRequest("Feil i inputvalidering på server");
        }
    }
}