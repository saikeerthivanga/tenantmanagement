package com.example.tenantmanagement;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class MyLogin extends AppCompatActivity {

    private EditText etEmail, etPassword;
    private String email, password;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_main);
        etEmail = findViewById(R.id.etemail);
        etPassword = findViewById(R.id.etpassword);


    }

    public void redirectSignUp(View view) {
        startActivity(new Intent(MyLogin.this,
                Signup_Activity.class));
    }

    private void redirect() {
        startActivity(new Intent(MyLogin.this,
                MainActivity2.class));
        finish();
    }

    public void btnLoginClick(View view) {

        email = etEmail.getText().toString().trim();
        password = etPassword.getText().toString().trim();

        if (email.equals("")) {
            etEmail.setError("Enter Email");
        } else if (password.equals("")) {
            etPassword.setError("Enter Password");
        } else {
            FirebaseAuth mAuth = FirebaseAuth.getInstance();
            mAuth.signInWithEmailAndPassword(email, password)
                    .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (task.isSuccessful()) {
                                redirect();
                            } else {
                                Toast.makeText(MyLogin.this,
                                        "Login Failed :" + task.getException(), Toast.LENGTH_SHORT).show();
                            }
                        }
                    });
        }
    }

    public void forgotPwdClick(View view) {
        email = etEmail.getText().toString().trim();

        if (email.equals("")) {
            etEmail.setError("Enter Email");
        } else {
            FirebaseAuth mAuth = FirebaseAuth.getInstance();
            mAuth.sendPasswordResetEmail(email)
                    .addOnCompleteListener(new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(@NonNull Task<Void> task) {
                            if (task.isSuccessful()) {
                                Toast.makeText(MyLogin.this,
                                        "Email Sent to :" + email, Toast.LENGTH_SHORT).show();
                            }
                            else
                            {
                                Toast.makeText(MyLogin.this,
                                        "Failed to send email : "
                                                + task.getException(), Toast.LENGTH_SHORT).show();
                            }
                        }
                    });

        }

    }

    @Override
    protected void onStart() {
        super.onStart();

        FirebaseAuth mAuth = FirebaseAuth.getInstance();
        FirebaseUser mUser = mAuth.getCurrentUser();

        if(mUser!=null)
        {
            redirect();
        }
    }

}