    import React, { Component } from 'react';
    import './App.css';
    // 3 практика
    const Tablesusi = () => {
        return (
            <div className="App">
    <br></br>
                <table>
                    <tr>
                        <td className='rozh'>Наименование</td>
                        <td className='rozh'>Цена</td>
                    </tr>
                    <tr>
                        <td>Нигиридзуси</td>
                        <td>99</td>
                    </tr>
                    <tr>
                        <td>Гункан-маки</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Макидзуси</td>
                        <td>59</td>
                    </tr>
                    <tr>
                        <td>Футомаки</td>
                        <td>200</td>
                    </tr>

                </table>

            </div>
        )
    }
    export default Tablesusi;