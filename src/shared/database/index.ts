import { createConnection } from 'typeorm';

// procura o arquivo ormconfig.json
// Poderíamos incluir as informações diretamente como parametros do método abaixo,
// porém a CLI do Typeorm também faz a leitura do arquivo ormconfig.json, ou seja,
// não há a necessidade de passar as informações aqui já que é feito a leitura também;
createConnection();
