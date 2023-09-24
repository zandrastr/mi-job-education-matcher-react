import { useEffect, useState } from 'react';
import { getDataFromScb } from '../services/ApiResponseService';
import { ApiResponse } from '../models/ssykResponse';

export const WorkDescription = () => {
    const [data, setData] = useState<ApiResponse | undefined>(undefined);
    const targetNumber = "3451"; 

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataFromScb();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Yrkesbeskrivning</h1>
            {data ? (
                <div>
                      {data.variables
                        .filter(variable => variable.code === "YrkesBeskrivning")
                        .map((variable, index) => {
                            const valueIndex = variable.values.indexOf(targetNumber);
                            if (valueIndex !== -1) {
                                return (
                                    <div key={index}>
                                        
                                        <p>
                                            {variable.values[valueIndex]} - {variable.valueTexts[valueIndex]}
                                        </p>
                                    </div>
                                )
                            }
                            return null;
                        })}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
