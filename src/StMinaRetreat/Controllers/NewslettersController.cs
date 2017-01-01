using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace StMinaRetreat.Controllers
{
    [Route("api/[controller]")]
    public class NewslettersController : Controller
    {
        [HttpGet()]
        public IEnumerable<NewsletterPath> GetNewsletterDirectories()
        {
            List<NewsletterPath> paths = new List<NewsletterPath>();

            foreach (var path in Directory.GetDirectories("wwwroot/Newsletters"))
            {
                paths.Add(new NewsletterPath { path = path });
            }

            return paths;
        }

        [HttpGet("{volume}")]
        public IEnumerable<NewsletterPath> GetNewletters(string volume)
        {
            List<NewsletterPath> paths = new List<NewsletterPath>();

            foreach (var path in Directory.GetFiles($"wwwroot/{volume}"))
            {
                paths.Add(new NewsletterPath { path = path });
            }

            return paths;
        }

        [HttpGet("{volume}/{quarter}")]
        public FileContentResult GetNewsletter(string volume, string quarter)
        {
            HttpContext.Response.ContentType = "application/pdf";
            FileContentResult result = new FileContentResult(System.IO.File.ReadAllBytes($"wwwroot/Newsletters/{volume}/{quarter}"), "application/pdf")
            {
                FileDownloadName = "test.pdf"
            };

            return result;
        }


        // POST: api/Articles
        [HttpPost]
        public void Post([FromBody]string value)
        {

        }

        // PUT: api/Articles/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class NewsletterPath
    {
        public string path { get; set; }
    }
}
