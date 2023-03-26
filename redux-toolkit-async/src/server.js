import { createServer } from "miragejs"

function mirageServer() {
    createServer({
        routes() {
            this.namespace="/api"
            this.get("updatecounter", () => {
                return 34;
            },
            {
              timing: 3000
            }
            )//(api, data)//for getting or fetching data
            
          },
        }
      )
    }
export default mirageServer;
    