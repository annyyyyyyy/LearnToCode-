import useTitle from '../../hooks/useTitle';
import { Success } from './components/Success';
import { Failed } from './components/Failed';
import { useLocation } from 'react-router-dom';

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

    return (
      <main>
        { state.status ? <Success data={state.data} />: <Failed /> }
      </main>
    )
  }