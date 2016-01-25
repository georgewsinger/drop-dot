goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__236404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__236404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236405__i = 0, G__236405__a = new Array(arguments.length -  0);
while (G__236405__i < G__236405__a.length) {G__236405__a[G__236405__i] = arguments[G__236405__i + 0]; ++G__236405__i;}
  args = new cljs.core.IndexedSeq(G__236405__a,0);
} 
return G__236404__delegate.call(this,args);};
G__236404.cljs$lang$maxFixedArity = 0;
G__236404.cljs$lang$applyTo = (function (arglist__236406){
var args = cljs.core.seq(arglist__236406);
return G__236404__delegate(args);
});
G__236404.cljs$core$IFn$_invoke$arity$variadic = G__236404__delegate;
return G__236404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__236407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__236407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236408__i = 0, G__236408__a = new Array(arguments.length -  0);
while (G__236408__i < G__236408__a.length) {G__236408__a[G__236408__i] = arguments[G__236408__i + 0]; ++G__236408__i;}
  args = new cljs.core.IndexedSeq(G__236408__a,0);
} 
return G__236407__delegate.call(this,args);};
G__236407.cljs$lang$maxFixedArity = 0;
G__236407.cljs$lang$applyTo = (function (arglist__236409){
var args = cljs.core.seq(arglist__236409);
return G__236407__delegate(args);
});
G__236407.cljs$core$IFn$_invoke$arity$variadic = G__236407__delegate;
return G__236407;
})()
;

return null;
});
