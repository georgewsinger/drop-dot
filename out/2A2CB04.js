goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__256778__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__256778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256779__i = 0, G__256779__a = new Array(arguments.length -  0);
while (G__256779__i < G__256779__a.length) {G__256779__a[G__256779__i] = arguments[G__256779__i + 0]; ++G__256779__i;}
  args = new cljs.core.IndexedSeq(G__256779__a,0);
} 
return G__256778__delegate.call(this,args);};
G__256778.cljs$lang$maxFixedArity = 0;
G__256778.cljs$lang$applyTo = (function (arglist__256780){
var args = cljs.core.seq(arglist__256780);
return G__256778__delegate(args);
});
G__256778.cljs$core$IFn$_invoke$arity$variadic = G__256778__delegate;
return G__256778;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__256781__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__256781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256782__i = 0, G__256782__a = new Array(arguments.length -  0);
while (G__256782__i < G__256782__a.length) {G__256782__a[G__256782__i] = arguments[G__256782__i + 0]; ++G__256782__i;}
  args = new cljs.core.IndexedSeq(G__256782__a,0);
} 
return G__256781__delegate.call(this,args);};
G__256781.cljs$lang$maxFixedArity = 0;
G__256781.cljs$lang$applyTo = (function (arglist__256783){
var args = cljs.core.seq(arglist__256783);
return G__256781__delegate(args);
});
G__256781.cljs$core$IFn$_invoke$arity$variadic = G__256781__delegate;
return G__256781;
})()
;

return null;
});
