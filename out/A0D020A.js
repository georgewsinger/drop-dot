goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152200__i = 0, G__152200__a = new Array(arguments.length -  0);
while (G__152200__i < G__152200__a.length) {G__152200__a[G__152200__i] = arguments[G__152200__i + 0]; ++G__152200__i;}
  args = new cljs.core.IndexedSeq(G__152200__a,0);
} 
return G__152199__delegate.call(this,args);};
G__152199.cljs$lang$maxFixedArity = 0;
G__152199.cljs$lang$applyTo = (function (arglist__152201){
var args = cljs.core.seq(arglist__152201);
return G__152199__delegate(args);
});
G__152199.cljs$core$IFn$_invoke$arity$variadic = G__152199__delegate;
return G__152199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152203__i = 0, G__152203__a = new Array(arguments.length -  0);
while (G__152203__i < G__152203__a.length) {G__152203__a[G__152203__i] = arguments[G__152203__i + 0]; ++G__152203__i;}
  args = new cljs.core.IndexedSeq(G__152203__a,0);
} 
return G__152202__delegate.call(this,args);};
G__152202.cljs$lang$maxFixedArity = 0;
G__152202.cljs$lang$applyTo = (function (arglist__152204){
var args = cljs.core.seq(arglist__152204);
return G__152202__delegate(args);
});
G__152202.cljs$core$IFn$_invoke$arity$variadic = G__152202__delegate;
return G__152202;
})()
;

return null;
});
