import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex'>
            {device.brands.map((brand) => (
                <Card
                    style={{width: "auto", cursor: "pointer"}}
                    key={brand.id}
                    className="px-3 py-2 me-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id && 'primary'}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;