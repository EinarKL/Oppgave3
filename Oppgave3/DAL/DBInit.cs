using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Oppgave3.Model;
using System.Collections.Generic;
using System.Linq;

namespace Oppgave3.DAL
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<FAQContext>();

                if (context.FAQs.Count() == 0)
                {
                    var FAQ1 = new FAQ
                    {
                        spørsmål = "Må jeg være kunde for å kjøpe billett?",
                        svar = "Nei. Man kan legge til navn og adresse under bestilling, men dette er ikke nødvendig.",
                        rating = 9
                    };
                    var FAQ2 = new FAQ
                    {
                        spørsmål = "Kan jeg endre billetten min?",
                        svar = "Ja. Hvis du har gjort en feil, eller ønsker å endre billetten av en annen grunn, " +
                                "kan du gjøre dette ved å trykke på 'endre' når du kommer til kvittering.",
                        rating = 2
                    };
                    var FAQ3 = new FAQ
                    {
                        spørsmål = "Er det studentrabatt?",
                        svar = "Det er en egen billettype for studenter, som er billigere enn en vanlig voksenbillett.",
                        rating = 3
                    };
                    var FAQ4 = new FAQ
                    {
                        spørsmål = "Kan jeg bestille flere billetter på samme bestilling?",
                        svar = "Nei. Dette er dessverre ikke mulig per dags dato, men er noe vi prioriterer å legge til så snart som mulig.",
                        rating = 4
                    };
                    var FAQ5 = new FAQ
                    {
                        spørsmål = "Hvor mye baggasje kan jeg ta med?",
                        svar = "Du har en håndbaggasje og en større baggasje inkludert i billetten din.",
                        rating = 8
                    };
                    var FAQ6 = new FAQ
                    {
                        spørsmål = "Kan jeg reservere sitteplass?",
                        svar = "Dette er ikke mulig per dags dato, så førstemann til mølla-prinsippet gjelder enn så lenge.",
                        rating = -1
                    };
                    var FAQ7 = new FAQ
                    {
                        spørsmål = "Hvilke tiltak blir gjort i hendhold til COVID-19?",
                        svar = "Sikkerheten til våre reisende er vår høyeste prioritet. Vi har redusert antall billetter per avgang " +
                        "og deler ut gratis munnbind ved påstigning. Rundt om i bussen har vi plassert dispensere med antibac.",
                        rating = 24
                    };
                    var FAQ8 = new FAQ
                    {
                        spørsmål = "Hva skjer hvis bussen er forsinket?",
                        svar = "Dersom bussen blir mer enn én time forsinket, vil du få tilbakebetalt 50% av billettprisen til det kortnummeret du betalte med.",
                        rating = 15
                    };

                    if (context.Kategorier.Count() == 0)
                    {
                        var list1 = new List<FAQ> { FAQ1 };
                        var list2 = new List<FAQ> { FAQ3, FAQ4, FAQ6 };
                        var list3 = new List<FAQ> { FAQ2, FAQ5 };
                        var list4 = new List<FAQ> { FAQ7, FAQ8 };

                        var kat1 = new Kategori
                        {
                            tittel = "Før bestilling",
                            faqs = list1
                        };
                        var kat2 = new Kategori
                        {
                            tittel = "Under bestilling",
                            faqs = list2
                        };
                        var kat3 = new Kategori
                        {
                            tittel = "Etter bestilling",
                            faqs = list3
                        };
                        var kat4 = new Kategori
                        {
                            tittel = "Generelle spørsmål",
                            faqs = list4
                        };

                        context.Kategorier.Add(kat1);
                        context.Kategorier.Add(kat2);
                        context.Kategorier.Add(kat3);
                        context.Kategorier.Add(kat4);
                    }

                    context.FAQs.Add(FAQ1);
                    context.FAQs.Add(FAQ2);
                    context.FAQs.Add(FAQ3);
                    context.FAQs.Add(FAQ4);
                    context.FAQs.Add(FAQ5);
                    context.FAQs.Add(FAQ6);
                    context.FAQs.Add(FAQ7);
                    context.FAQs.Add(FAQ8);
                }

                if (context.Forslag.Count() == 0)
                {
                    var forslag1 = new Forslag
                    {
                        navn = "Ola",
                        epost = "ola@nordmann.no",
                        spørsmål = "Hvor finner jeg holdeplassen?"
                    };
                    var forslag2 = new Forslag
                    {
                        navn = "Kari",
                        epost = "kari@nordmann.no",
                        spørsmål = "Hvordan vet jeg hvilken buss jeg skal ta?"
                    };

                    context.Forslag.Add(forslag1);
                    context.Forslag.Add(forslag2);
                }

                context.SaveChanges();
            }
        }
    }
}