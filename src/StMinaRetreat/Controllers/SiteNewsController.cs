using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;

namespace StMinaRetreat.Controllers
{
    [Produces("application/json")]
    [Route("api/SiteNews")]
    public class SiteNewsController : Controller
    {


        // POST: api/SiteNews
        [HttpPost]
        public bool Post([FromBody]SiteNews request)
        {

            if (!request.Password.Equals("StMina2017"))
            {
                return false;
            }

            System.IO.File.Delete("wwwroot/app/site-news.json");
            System.IO.File.WriteAllText("wwwroot/app/site-news.json", JsonConvert.SerializeObject(request).ToString());

            return true;
        }



    }

    public class SiteNews
    {
        public string Password { get; set; }
        public string DisplayAuthorName { get; set; }
        public string Title { get; set; }
        public string News { get; set; }
        public string DateTime { get; set; }
    }
}
