import { Stack } from "@mui/material"

import { categories } from "../utils/constants"

const Sidebar = ({ selectedCategory,
    setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { xs: 'auto', sm: '95%' },
            flexDirection: { sm: 'column' }
        }}
    >
        {categories.map((category, index) => (
            <button key={index}
                className="category-btn"
                onClick={() => {
                    setSelectedCategory(category.name)
                }}
                style={{
                    background: category.name ===
                        selectedCategory && '#fc1503',
                    color: 'white'
                }}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? "white" : "red",
                        marginRight: "15px"
                    }}
                >{category.icon}</span>
                <span
                    style={{
                        opacity: category.name ===
                            selectedCategory ? "1" : "0.8"
                    }}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
)


export default Sidebar