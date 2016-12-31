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
        public IEnumerable<string> GetNewsletterDirectories()
        {
            return Directory.GetDirectories("wwwroot/Newsletters");
        }

        [HttpGet("{volume}")]
        public IEnumerable<string> GetNewletters(string volume)
        {
            return Directory.GetFiles($"wwwroot/Newsletters/{volume}");
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
}
