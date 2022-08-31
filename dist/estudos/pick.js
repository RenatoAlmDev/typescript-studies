// Pick é muito parecido com o Omit, mas faz o contrário, utilizamos para pegar propriedades específicas
let localUser;
let localRepo;
// ao definirmos dessa maneira, só estarão disponíveis as propriedades que marcamos no pick:
localUser.bio;
localRepo.default_branch;
