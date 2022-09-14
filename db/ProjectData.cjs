const projectData = [
  {
    projectTitle: "Understanding React.js",
    projectOwner: "Kevin",
    projectSalesRep: "Kevin",
    description:
      "tired af fkjahgfuiasdbcyutjbyjhhtbvjhtvfukahstdbhujatbcdhijbadkjvcybauvdtbaeyiuftvbaiujydvbiuaysdbviuaysdbviujyabdsviuyabdivuybaiuysdvbyiuasdbfviuyabsdfiuyvbuiaydsbfviuyjabdsiuyvbaiuydbviujyabsviuytbauiytrbauiywebiujyavbuiyewbvuiayerwbviuqaeyrbviuavybdujiashdbvkjhascbvkjzhbvciukaybviuaybviuaybsvdiuyabsdviuybasdiuvybasdiujvbaiuydsvbiuaysdbvuyabsduivybasdiuvybaiuybviuvyasbuyidvbaiuysdbvyjhkadsbvkjbdsaviujkybvadsyujik",
    status: "Complete",
    // // creationDate: "1/1/2022",
  },
  {
    projectTitle: "Opela",
    projectOwner: "Daniel",
    projectSalesRep: "Marni Gilluley",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    status: "Complete",
    // // creationDate: "1/8/2022",
  },
  {
    projectTitle: "Wrapsafe",
    projectOwner: "Amy",
    projectSalesRep: "Missy Kareman",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    status: "Complete",
    // creationDate: "1/9/2022",
  },
  {
    projectTitle: "Vagram",
    projectOwner: "Amy",
    projectSalesRep: "Auguste Gossipin",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    status: "Complete",
    // creationDate: "1/13/2022",
  },
  {
    projectTitle: "Hatity",
    projectOwner: "Kevin",
    projectSalesRep: "Lucais Ditchburn",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: "Complete",
    // creationDate: "1/19/2022",
  },
  {
    projectTitle: "Namfix",
    projectOwner: "Kevin",
    projectSalesRep: "Aloise Meddick",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    status: "Complete",
    // creationDate: "1/27/2022",
  },
  {
    projectTitle: "Bytecard",
    projectOwner: "Amy",
    projectSalesRep: "Winn Dewane",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    status: "Complete",
    // creationDate: "1/30/2022",
  },
  {
    projectTitle: "Fixflex",
    projectOwner: "Amy",
    projectSalesRep: "Dedie Lutwyche",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    status: "Complete",
    // creationDate: "2/1/2022",
  },
  {
    projectTitle: "Tresom",
    projectOwner: "Kevin",
    projectSalesRep: "Hollie Buckberry",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    status: "Complete",
    // creationDate: "2/8/2022",
  },
  {
    projectTitle: "Latlux",
    projectOwner: "Dwight",
    projectSalesRep: "Curcio Grayshan",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    status: "Complete",
    // creationDate: "2/14/2022",
  },
  {
    projectTitle: "Tampflex",
    projectOwner: "Dwight",
    projectSalesRep: "Estrellita Weedon",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    status: "In Process",
    // creationDate: "2/17/2022",
  },
  {
    projectTitle: "Namfix",
    projectOwner: "Amy",
    projectSalesRep: "Karon Pease",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    status: "In Process",
    // creationDate: "2/17/2022",
  },
  {
    projectTitle: "Domainer",
    projectOwner: "Dwight",
    projectSalesRep: "Kali Matyas",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    status: "In Process",
    // creationDate: "2/20/2022",
  },
  {
    projectTitle: "Biodex",
    projectOwner: "Kevin",
    projectSalesRep: "Catie Bridat",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    status: "In Process",
    // creationDate: "2/21/2022",
  },
  {
    projectTitle: "Konklab",
    projectOwner: "Dwight",
    projectSalesRep: "Gunther Powling",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    status: "In Process",
    // creationDate: "2/28/2022",
  },
  {
    projectTitle: "Alpha",
    projectOwner: "Amy",
    projectSalesRep: "Dwain Eyeington",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    status: "on Hold",
    // creationDate: "3/5/2022",
  },
  {
    projectTitle: "Span",
    projectOwner: "Dwight",
    projectSalesRep: "Ginnie Yuryshev",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    status: "on Hold",
    // creationDate: "3/8/2022",
  },
  {
    projectTitle: "Gembucket",
    projectOwner: "Daniel",
    projectSalesRep: "Ambros Sleaford",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    status: "on Hold",
    // creationDate: "3/9/2022",
  },
  {
    projectTitle: "Overhold",
    projectOwner: "Amy",
    projectSalesRep: "Correy Kewish",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    status: "on Hold",
    // creationDate: "3/14/2022",
  },
  {
    projectTitle: "Solarbreeze",
    projectOwner: "Dwight",
    projectSalesRep: "Ganny Saye",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    status: "on Hold",
    // creationDate: "3/18/2022",
  },
  {
    projectTitle: "Bitchip",
    projectOwner: "Dwight",
    projectSalesRep: "Kenna Dibden",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    status: "on Hold",
    // creationDate: "3/23/2022",
  },
  {
    projectTitle: "Tresom",
    projectOwner: "Amy",
    projectSalesRep: "Josephina Rhodef",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    status: "on Hold",
    // creationDate: "3/24/2022",
  },
  {
    projectTitle: "Keylex",
    projectOwner: "Kevin",
    projectSalesRep: "Dalenna Thirlwell",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    status: "Complete",
    // creationDate: "3/30/2022",
  },
  {
    projectTitle: "Stringtough",
    projectOwner: "Dwight",
    projectSalesRep: "Marcello Lanchester",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    status: "In Process",
    // creationDate: "4/1/2022",
  },
  {
    projectTitle: "Mat Lam Tam",
    projectOwner: "Dwight",
    projectSalesRep: "Roselia Hanaford",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    status: "In Process",
    // creationDate: "4/6/2022",
  },
  {
    projectTitle: "It",
    projectOwner: "Kevin",
    projectSalesRep: "Waneta Mussard",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    status: "In Process",
    // creationDate: "4/7/2022",
  },
  {
    projectTitle: "Gembucket",
    projectOwner: "Dwight",
    projectSalesRep: "Carlina Allawy",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    status: "Complete",
    // creationDate: "4/10/2022",
  },
  {
    projectTitle: "Asoka",
    projectOwner: "Kevin",
    projectSalesRep: "Ira Gors",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    status: "Cancelled",
    // creationDate: "4/17/2022",
  },
  {
    projectTitle: "Bitwolf",
    projectOwner: "Daniel",
    projectSalesRep: "Roselin Colliss",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    status: "Cancelled",
    // creationDate: "4/19/2022",
  },
  {
    projectTitle: "Fintone",
    projectOwner: "Kevin",
    projectSalesRep: "Vere Summerscales",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    status: "Cancelled",
    // creationDate: "4/22/2022",
  },
  {
    projectTitle: "Fixflex",
    projectOwner: "Dwight",
    projectSalesRep: "Stefa Ansley",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    status: "Cancelled",
    // creationDate: "4/25/2022",
  },
  {
    projectTitle: "Kanlam",
    projectOwner: "Amy",
    projectSalesRep: "Sven Ibeson",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    status: "Cancelled",
    // creationDate: "4/30/2022",
  },
  {
    projectTitle: "Sonair",
    projectOwner: "Dwight",
    projectSalesRep: "Cherida Meachem",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    status: "Cancelled",
    // creationDate: "5/6/2022",
  },
  {
    projectTitle: "Latlux",
    projectOwner: "Dwight",
    projectSalesRep: "Sadye Hardson",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    status: "Cancelled",
    // creationDate: "5/16/2022",
  },
  {
    projectTitle: "Bamity",
    projectOwner: "Daniel",
    projectSalesRep: "Stevena Gibb",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    status: "Cancelled",
    // creationDate: "5/20/2022",
  },
  {
    projectTitle: "Duobam",
    projectOwner: "Kevin",
    projectSalesRep: "Alissa Feyer",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    status: "Complete",
    // creationDate: "5/26/2022",
  },
  {
    projectTitle: "Treeflex",
    projectOwner: "Dwight",
    projectSalesRep: "Ruperta Dear",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    status: "Complete",
    // creationDate: "6/1/2022",
  },
  {
    projectTitle: "Viva",
    projectOwner: "Kevin",
    projectSalesRep: "Maressa Haime",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    status: "In Process",
    // creationDate: "6/9/2022",
  },
  {
    projectTitle: "Bytecard",
    projectOwner: "Amy",
    projectSalesRep: "Tucker Jinks",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    status: "In Process",
    // creationDate: "6/15/2022",
  },
  {
    projectTitle: "Biodex",
    projectOwner: "Dwight",
    projectSalesRep: "Carol-jean Gagie",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    status: "In Process",
    // creationDate: "6/17/2022",
  },
  {
    projectTitle: "Subin",
    projectOwner: "Dwight",
    projectSalesRep: "Kore McCallam",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    status: "Complete",
    // creationDate: "6/19/2022",
  },
  {
    projectTitle: "Stringtough",
    projectOwner: "Amy",
    projectSalesRep: "Hardy Culter",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    status: "On Hold",
    // creationDate: "6/26/2022",
  },
  {
    projectTitle: "Tres-Zap",
    projectOwner: "Kevin",
    projectSalesRep: "Thomasa Scrowson",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    status: "Cancelled",
    // creationDate: "6/28/2022",
  },
  {
    projectTitle: "Y-Solowarm",
    projectOwner: "Daniel",
    projectSalesRep: "Hesther Eye",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: "Complete",
    // creationDate: "7/2/2022",
  },
  {
    projectTitle: "Zathin",
    projectOwner: "Amy",
    projectSalesRep: "Gusta Neasham",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    status: "In Process",
    // creationDate: "7/3/2022",
  },
  {
    projectTitle: "Span",
    projectOwner: "Dwight",
    projectSalesRep: "Isidro McArthur",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    status: "In Process",
    // creationDate: "7/8/2022",
  },
  {
    projectTitle: "Holdlamis",
    projectOwner: "Dwight",
    projectSalesRep: "Alameda Vallentin",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    status: "Complete",
    // creationDate: "7/13/2022",
  },
  {
    projectTitle: "Stringtough",
    projectOwner: "Dwight",
    projectSalesRep: "Sula Cawse",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    status: "On Hold",
    // creationDate: "7/28/2022",
  },
  {
    projectTitle: "Tres-Zap",
    projectOwner: "Amy",
    projectSalesRep: "Vlad Rowthorn",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    status: "Cancelled",
    // creationDate: "8/2/2022",
  },
  {
    projectTitle: "Voltsillam",
    projectOwner: "Daniel",
    projectSalesRep: "Riannon Lomasna",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    status: "In Process",
    // creationDate: "8/12/2022",
  },
  {
    projectTitle: "Flexidy",
    projectOwner: "Daniel",
    projectSalesRep: "Mortimer Hlavac",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    status: "Complete",
    // creationDate: "8/15/2022",
  },
];

module.exports = {
  projectData,
};
