import * as express from 'express'
import axios, { AxiosResponse } from 'axios'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'

class HomeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  initRoutes() {
    this.router.get('/', this.index)
    this.router.get('/smile', this.smile)
  }

  index = (req: Request, res: Response) => {
    const cart = [
      { id: 1001, quantity: 2, name: 'Apples' },
      { id: 1002, quantity: 10, name: 'Bananas' },
      { id: 1003, quantity: 4, name: 'Eggs' },
    ]

    res.render('home/index', {
      cart,
      cartItems: cart.reduce((a, c) => a + c.quantity, 0),
    })
  }

  smile = async (req: Request, res: Response) => {  
    const q = await axios.get('https://api.yomomma.info')
    res.send(q.data.joke)
  }
}

export default HomeController
