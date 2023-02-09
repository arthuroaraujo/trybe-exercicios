class School {
    private _matricula: string;
    private _nome: string;
    private _notasDeProva: number[];
    private _notasDeTrabalho: number[];
  
      constructor(matricula: string, nome: string, notasDeProva: number[], notasDeTrabalho: number[]) {
      this._matricula = matricula;
      this._nome = nome;
      this._notasDeProva = notasDeProva;
      this._notasDeTrabalho = notasDeTrabalho;
    }

    get notasDeProva(): number[] {
        return this._notasDeProva;
    }
    
    set notasDeProva(value: number[]) {
      if (value.length > 4) {
        throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }
    
      this._notasDeProva = value;
    }
    
    get notasDeTrabalho(): number[] {
      return this._notasDeTrabalho;
    }
    
    set notasDeTrabalho(value: number[]) {
      if (value.length > 2) {
        throw new Error(
          'A pessoa estudante só pode possuir 2 notas de trabalhos.',
        );
      }
      this._notasDeTrabalho = value;
}
  
    calculateSum():number {
        return [...this._notasDeProva, ...this._notasDeTrabalho].reduce(function(acc, curr){
            const sum = acc + curr
            return sum;
          },0);;
    }

    calculateAverage (): number {
        const sumGrades = this.calculateSum();
        const divider = this._notasDeProva.length + this._notasDeTrabalho.length;
    
        return Math.round(sumGrades / divider);
      }
      
}
