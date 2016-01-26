goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__295981__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__295981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295982__i = 0, G__295982__a = new Array(arguments.length -  0);
while (G__295982__i < G__295982__a.length) {G__295982__a[G__295982__i] = arguments[G__295982__i + 0]; ++G__295982__i;}
  args = new cljs.core.IndexedSeq(G__295982__a,0);
} 
return G__295981__delegate.call(this,args);};
G__295981.cljs$lang$maxFixedArity = 0;
G__295981.cljs$lang$applyTo = (function (arglist__295983){
var args = cljs.core.seq(arglist__295983);
return G__295981__delegate(args);
});
G__295981.cljs$core$IFn$_invoke$arity$variadic = G__295981__delegate;
return G__295981;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__295984__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__295984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295985__i = 0, G__295985__a = new Array(arguments.length -  0);
while (G__295985__i < G__295985__a.length) {G__295985__a[G__295985__i] = arguments[G__295985__i + 0]; ++G__295985__i;}
  args = new cljs.core.IndexedSeq(G__295985__a,0);
} 
return G__295984__delegate.call(this,args);};
G__295984.cljs$lang$maxFixedArity = 0;
G__295984.cljs$lang$applyTo = (function (arglist__295986){
var args = cljs.core.seq(arglist__295986);
return G__295984__delegate(args);
});
G__295984.cljs$core$IFn$_invoke$arity$variadic = G__295984__delegate;
return G__295984;
})()
;

return null;
});
