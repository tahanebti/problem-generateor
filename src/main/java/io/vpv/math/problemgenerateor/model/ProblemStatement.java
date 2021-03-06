package io.vpv.math.problemgenerateor.model;

public class ProblemStatement {

    private int firstNumber;
    private  int secondNumber;
    private int answer;
    private String operator;

    public ProblemStatement(String operator) {
        this.operator = operator;
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }

    public int getFirstNumber() {
        return firstNumber;
    }

    public void setFirstNumber(int firstNumber) {
        this.firstNumber = firstNumber;
    }

    public int getSecondNumber() {
        return secondNumber;
    }

    public void setSecondNumber(int secondNumber) {
        this.secondNumber = secondNumber;
    }

    public String getOperator() {
        return operator;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("ProblemStatement{");
        sb.append("firstNumber=").append(firstNumber);
        sb.append(", secondNumber=").append(secondNumber);
        sb.append(", answer=").append(answer);
        sb.append(", operator='").append(operator).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
