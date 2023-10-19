import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { canchas, galeriasCanchas } from '../../data/categoryDb'

const fetchCanchasGeneralAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canchasConGalerias = canchas.map((cancha) => {
        const galeria = galeriasCanchas.filter((galeria) => galeria.id_cancha === cancha.id)
        return { ...cancha, galeria }
      })
      resolve(canchasConGalerias)
      // En un escenario real, aquí podrías manejar errores y llamar a reject si es necesario.
    }, 1000) // Simulamos un retraso de 1 segundo (1000 ms).
  })
}

// Definir un Thunk para obtener las canchas con galerías de forma asíncrona
export const fetchCanchasGeneral = createAsyncThunk('cancha/fetchCanchasGeneral', async () => {
  const canchasConGalerias = await fetchCanchasGeneralAsync() // Espera a la simulación asincrónica
  return canchasConGalerias
})

const initialState = {
  canchas: [],
  loading: false,
  error: null
}

export const canchaSlice = createSlice({
  name: 'cancha',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCanchasGeneral.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCanchasGeneral.fulfilled, (state, action) => {
        console.log('ACTION:PAYLOADER: -> ', action.payload)
        state.loading = false
        state.canchas = action.payload
      })
      .addCase(fetchCanchasGeneral.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message || 'Error al cargar las canchas'
        state.canchas = []
      })
  }
})

export default canchaSlice.reducer
