goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332942__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332943__i = 0, G__332943__a = new Array(arguments.length -  0);
while (G__332943__i < G__332943__a.length) {G__332943__a[G__332943__i] = arguments[G__332943__i + 0]; ++G__332943__i;}
  args = new cljs.core.IndexedSeq(G__332943__a,0);
} 
return G__332942__delegate.call(this,args);};
G__332942.cljs$lang$maxFixedArity = 0;
G__332942.cljs$lang$applyTo = (function (arglist__332944){
var args = cljs.core.seq(arglist__332944);
return G__332942__delegate(args);
});
G__332942.cljs$core$IFn$_invoke$arity$variadic = G__332942__delegate;
return G__332942;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332945__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332946__i = 0, G__332946__a = new Array(arguments.length -  0);
while (G__332946__i < G__332946__a.length) {G__332946__a[G__332946__i] = arguments[G__332946__i + 0]; ++G__332946__i;}
  args = new cljs.core.IndexedSeq(G__332946__a,0);
} 
return G__332945__delegate.call(this,args);};
G__332945.cljs$lang$maxFixedArity = 0;
G__332945.cljs$lang$applyTo = (function (arglist__332947){
var args = cljs.core.seq(arglist__332947);
return G__332945__delegate(args);
});
G__332945.cljs$core$IFn$_invoke$arity$variadic = G__332945__delegate;
return G__332945;
})()
;

return null;
});
