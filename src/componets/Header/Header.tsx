import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './style.css';

export const Header = () => {
    return (
        <div className='header'>
            <Stack spacing={130} direction="row">
                <Button variant="contained">Получить данные</Button>
                <Button variant="contained">Отчистить поля</Button>
            </Stack>
        </div>
    );
};
