goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__216204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__216204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__216205__i = 0, G__216205__a = new Array(arguments.length -  0);
while (G__216205__i < G__216205__a.length) {G__216205__a[G__216205__i] = arguments[G__216205__i + 0]; ++G__216205__i;}
  args = new cljs.core.IndexedSeq(G__216205__a,0);
} 
return G__216204__delegate.call(this,args);};
G__216204.cljs$lang$maxFixedArity = 0;
G__216204.cljs$lang$applyTo = (function (arglist__216206){
var args = cljs.core.seq(arglist__216206);
return G__216204__delegate(args);
});
G__216204.cljs$core$IFn$_invoke$arity$variadic = G__216204__delegate;
return G__216204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__216207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__216207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__216208__i = 0, G__216208__a = new Array(arguments.length -  0);
while (G__216208__i < G__216208__a.length) {G__216208__a[G__216208__i] = arguments[G__216208__i + 0]; ++G__216208__i;}
  args = new cljs.core.IndexedSeq(G__216208__a,0);
} 
return G__216207__delegate.call(this,args);};
G__216207.cljs$lang$maxFixedArity = 0;
G__216207.cljs$lang$applyTo = (function (arglist__216209){
var args = cljs.core.seq(arglist__216209);
return G__216207__delegate(args);
});
G__216207.cljs$core$IFn$_invoke$arity$variadic = G__216207__delegate;
return G__216207;
})()
;

return null;
});
