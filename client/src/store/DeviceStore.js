import {makeAutoObservable} from "mobx"

export default class DeviceStore{
    constructor (){
        this._types = [
            {
                id: 1, name: "Холодильники",
            },
            {
                id: 2, name: "Смартфоны"
            },
            {
                id: 3, name: "Телевизоры"
            },
            {
                id: 4, name: "Ноутбуки"
            }
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "Huawei"},
        ]
        this._devices = [
            {id: 1, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
            {id: 2, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
            {id: 3, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
            {id: 4, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
            {id: 5, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
            {id: 6, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}