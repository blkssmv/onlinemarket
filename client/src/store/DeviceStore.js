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
            {id: 1, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 2, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 3, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 4, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 5, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 6, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 7, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 8, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 9, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
            {id: 10, name: "IPhone 12Pro", price: 250000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Freview%2Fapple-iphone-12-pro%2F&psig=AOvVaw2GywDwKOFEGPmHdedKIoQb&ust=1675837149399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjOw4Higv0CFQAAAAAdAAAAABAV'},
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