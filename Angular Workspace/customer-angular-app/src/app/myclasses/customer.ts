export class Customer {
    constructor(
        public id="",
        public customerName="",
        public customerContact="",
        public customerEmail="",
        public customerAge=0,
        public username="",
        public password="",
        public registerDate:Date | string=new Date(),
        public customerImage="Resources/sampleimage.webp"
    )
    {}


}
