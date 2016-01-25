goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10630__i = 0, G__10630__a = new Array(arguments.length -  0);
while (G__10630__i < G__10630__a.length) {G__10630__a[G__10630__i] = arguments[G__10630__i + 0]; ++G__10630__i;}
  args = new cljs.core.IndexedSeq(G__10630__a,0);
} 
return G__10629__delegate.call(this,args);};
G__10629.cljs$lang$maxFixedArity = 0;
G__10629.cljs$lang$applyTo = (function (arglist__10631){
var args = cljs.core.seq(arglist__10631);
return G__10629__delegate(args);
});
G__10629.cljs$core$IFn$_invoke$arity$variadic = G__10629__delegate;
return G__10629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10633__i = 0, G__10633__a = new Array(arguments.length -  0);
while (G__10633__i < G__10633__a.length) {G__10633__a[G__10633__i] = arguments[G__10633__i + 0]; ++G__10633__i;}
  args = new cljs.core.IndexedSeq(G__10633__a,0);
} 
return G__10632__delegate.call(this,args);};
G__10632.cljs$lang$maxFixedArity = 0;
G__10632.cljs$lang$applyTo = (function (arglist__10634){
var args = cljs.core.seq(arglist__10634);
return G__10632__delegate(args);
});
G__10632.cljs$core$IFn$_invoke$arity$variadic = G__10632__delegate;
return G__10632;
})()
;

return null;
});
