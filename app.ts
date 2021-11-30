import express,{Request,Response} from 'express';

const app: express.Application = express();

//use middleware body-parser
app.use(express.json());
//use middleware url-encoded
app.use(express.urlencoded({extended:true}));

app.get('/', (req:Request, res: Response) => {
    res.send('Hello World! get');
    }
);
// post method
app.post('/', (req:Request, res: Response) => {
    res.send('Hello World! post');
    }
);
// put method
app.put('/', (req:Request, res: Response) => {
    res.send('Hello World! put');
    }   
);
// delete method
app.delete('/', (req:Request, res: Response) => {
    res.send('Hello World! delete');
    }
);
// patch method
app.patch('/', (req:Request, res: Response) => {
    res.send('Hello World! patch');
    }
);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

