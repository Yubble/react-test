import { enableMapSet } from "immer"
import { useCallback, useEffect, useState } from "react"
import { useImmer } from 'use-immer'

enableMapSet()

const M1 = new Map()
M1.set('刘先生', {
    name: '刘俸一',
    age: 31,
    job: 'businessman',
    onBlur: null,
    onChange() {
        console.log('this is ', this)
    }
})
M1.set('刘太太', {
    name: '王肉喵',
    age: 32,
    job: 'accountant',
    onBlur: null,
    onChange() {
        console.log('this is ', this)
    }
})

export const TUseImmer = () => {
    const [m1, setM1] = useImmer(M1)
    // const [m1, setM1] = useState(M1)

    useEffect(() => {
        setM1((draft) => {
            // draft.set('刘小宝', {
            //     name: '刘怡箫',
            //     age: 2,
            //     job: 'child',
            //     onBlur: null,
            //     onChange() {}
            // })

            draft.get('刘太太').onBlur = (e) => {
                draft.get('刘太太').name = '王肉肉'
                // draft.set('刘小宝', {
                //     name: '刘怡箫',
                //     age: 2,
                //     job: 'child',
                //     onBlur: null,
                //     onChange() {}
                // })
                console.log('---- draft liu is ----', draft)
            }
        })
    }, [])

    // useEffect(() => {
    //     console.log('---- 刘先生内容发生改变 ----', m1.get('刘先生'))
    // }, [m1.get('刘先生')])

    const M1list = [...m1.values()]
    return (
        <div>
            <ul>
                {
                    M1list.map((li, index) => {
                        return (
                            <li key={index}>
                                <label>
                                    {li.name} 的岁数是:
                                </label>
                                <input value={li.age} onChange={li.onChange} onBlur={li.onBlur} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}