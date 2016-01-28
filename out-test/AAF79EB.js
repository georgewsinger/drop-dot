goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59683__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59684__i = 0, G__59684__a = new Array(arguments.length -  0);
while (G__59684__i < G__59684__a.length) {G__59684__a[G__59684__i] = arguments[G__59684__i + 0]; ++G__59684__i;}
  args = new cljs.core.IndexedSeq(G__59684__a,0);
} 
return G__59683__delegate.call(this,args);};
G__59683.cljs$lang$maxFixedArity = 0;
G__59683.cljs$lang$applyTo = (function (arglist__59685){
var args = cljs.core.seq(arglist__59685);
return G__59683__delegate(args);
});
G__59683.cljs$core$IFn$_invoke$arity$variadic = G__59683__delegate;
return G__59683;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59686__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59687__i = 0, G__59687__a = new Array(arguments.length -  0);
while (G__59687__i < G__59687__a.length) {G__59687__a[G__59687__i] = arguments[G__59687__i + 0]; ++G__59687__i;}
  args = new cljs.core.IndexedSeq(G__59687__a,0);
} 
return G__59686__delegate.call(this,args);};
G__59686.cljs$lang$maxFixedArity = 0;
G__59686.cljs$lang$applyTo = (function (arglist__59688){
var args = cljs.core.seq(arglist__59688);
return G__59686__delegate(args);
});
G__59686.cljs$core$IFn$_invoke$arity$variadic = G__59686__delegate;
return G__59686;
})()
;

return null;
});
