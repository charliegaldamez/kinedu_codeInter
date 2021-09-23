class DataNormalization {
    static buttonTextState(state) {
        switch (state) {
            case null: {
              return "Not answerd";
            }
            case false: {
              return "Uncompleted";
            }
            default: {
              return "Completed";
            }
          }
    }
}

export default DataNormalization;