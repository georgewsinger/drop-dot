goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39277__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39278__i = 0, G__39278__a = new Array(arguments.length -  0);
while (G__39278__i < G__39278__a.length) {G__39278__a[G__39278__i] = arguments[G__39278__i + 0]; ++G__39278__i;}
  args = new cljs.core.IndexedSeq(G__39278__a,0);
} 
return G__39277__delegate.call(this,args);};
G__39277.cljs$lang$maxFixedArity = 0;
G__39277.cljs$lang$applyTo = (function (arglist__39279){
var args = cljs.core.seq(arglist__39279);
return G__39277__delegate(args);
});
G__39277.cljs$core$IFn$_invoke$arity$variadic = G__39277__delegate;
return G__39277;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39280__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39281__i = 0, G__39281__a = new Array(arguments.length -  0);
while (G__39281__i < G__39281__a.length) {G__39281__a[G__39281__i] = arguments[G__39281__i + 0]; ++G__39281__i;}
  args = new cljs.core.IndexedSeq(G__39281__a,0);
} 
return G__39280__delegate.call(this,args);};
G__39280.cljs$lang$maxFixedArity = 0;
G__39280.cljs$lang$applyTo = (function (arglist__39282){
var args = cljs.core.seq(arglist__39282);
return G__39280__delegate(args);
});
G__39280.cljs$core$IFn$_invoke$arity$variadic = G__39280__delegate;
return G__39280;
})()
;

return null;
});
