goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13280__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13281__i = 0, G__13281__a = new Array(arguments.length -  0);
while (G__13281__i < G__13281__a.length) {G__13281__a[G__13281__i] = arguments[G__13281__i + 0]; ++G__13281__i;}
  args = new cljs.core.IndexedSeq(G__13281__a,0);
} 
return G__13280__delegate.call(this,args);};
G__13280.cljs$lang$maxFixedArity = 0;
G__13280.cljs$lang$applyTo = (function (arglist__13282){
var args = cljs.core.seq(arglist__13282);
return G__13280__delegate(args);
});
G__13280.cljs$core$IFn$_invoke$arity$variadic = G__13280__delegate;
return G__13280;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13283__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13284__i = 0, G__13284__a = new Array(arguments.length -  0);
while (G__13284__i < G__13284__a.length) {G__13284__a[G__13284__i] = arguments[G__13284__i + 0]; ++G__13284__i;}
  args = new cljs.core.IndexedSeq(G__13284__a,0);
} 
return G__13283__delegate.call(this,args);};
G__13283.cljs$lang$maxFixedArity = 0;
G__13283.cljs$lang$applyTo = (function (arglist__13285){
var args = cljs.core.seq(arglist__13285);
return G__13283__delegate(args);
});
G__13283.cljs$core$IFn$_invoke$arity$variadic = G__13283__delegate;
return G__13283;
})()
;

return null;
});
