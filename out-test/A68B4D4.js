goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26949__i = 0, G__26949__a = new Array(arguments.length -  0);
while (G__26949__i < G__26949__a.length) {G__26949__a[G__26949__i] = arguments[G__26949__i + 0]; ++G__26949__i;}
  args = new cljs.core.IndexedSeq(G__26949__a,0);
} 
return G__26948__delegate.call(this,args);};
G__26948.cljs$lang$maxFixedArity = 0;
G__26948.cljs$lang$applyTo = (function (arglist__26950){
var args = cljs.core.seq(arglist__26950);
return G__26948__delegate(args);
});
G__26948.cljs$core$IFn$_invoke$arity$variadic = G__26948__delegate;
return G__26948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26952__i = 0, G__26952__a = new Array(arguments.length -  0);
while (G__26952__i < G__26952__a.length) {G__26952__a[G__26952__i] = arguments[G__26952__i + 0]; ++G__26952__i;}
  args = new cljs.core.IndexedSeq(G__26952__a,0);
} 
return G__26951__delegate.call(this,args);};
G__26951.cljs$lang$maxFixedArity = 0;
G__26951.cljs$lang$applyTo = (function (arglist__26953){
var args = cljs.core.seq(arglist__26953);
return G__26951__delegate(args);
});
G__26951.cljs$core$IFn$_invoke$arity$variadic = G__26951__delegate;
return G__26951;
})()
;

return null;
});
