goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10074__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10075__i = 0, G__10075__a = new Array(arguments.length -  0);
while (G__10075__i < G__10075__a.length) {G__10075__a[G__10075__i] = arguments[G__10075__i + 0]; ++G__10075__i;}
  args = new cljs.core.IndexedSeq(G__10075__a,0);
} 
return G__10074__delegate.call(this,args);};
G__10074.cljs$lang$maxFixedArity = 0;
G__10074.cljs$lang$applyTo = (function (arglist__10076){
var args = cljs.core.seq(arglist__10076);
return G__10074__delegate(args);
});
G__10074.cljs$core$IFn$_invoke$arity$variadic = G__10074__delegate;
return G__10074;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10077__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10078__i = 0, G__10078__a = new Array(arguments.length -  0);
while (G__10078__i < G__10078__a.length) {G__10078__a[G__10078__i] = arguments[G__10078__i + 0]; ++G__10078__i;}
  args = new cljs.core.IndexedSeq(G__10078__a,0);
} 
return G__10077__delegate.call(this,args);};
G__10077.cljs$lang$maxFixedArity = 0;
G__10077.cljs$lang$applyTo = (function (arglist__10079){
var args = cljs.core.seq(arglist__10079);
return G__10077__delegate(args);
});
G__10077.cljs$core$IFn$_invoke$arity$variadic = G__10077__delegate;
return G__10077;
})()
;

return null;
});
