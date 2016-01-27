goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__108929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__108929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108930__i = 0, G__108930__a = new Array(arguments.length -  0);
while (G__108930__i < G__108930__a.length) {G__108930__a[G__108930__i] = arguments[G__108930__i + 0]; ++G__108930__i;}
  args = new cljs.core.IndexedSeq(G__108930__a,0);
} 
return G__108929__delegate.call(this,args);};
G__108929.cljs$lang$maxFixedArity = 0;
G__108929.cljs$lang$applyTo = (function (arglist__108931){
var args = cljs.core.seq(arglist__108931);
return G__108929__delegate(args);
});
G__108929.cljs$core$IFn$_invoke$arity$variadic = G__108929__delegate;
return G__108929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__108932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__108932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108933__i = 0, G__108933__a = new Array(arguments.length -  0);
while (G__108933__i < G__108933__a.length) {G__108933__a[G__108933__i] = arguments[G__108933__i + 0]; ++G__108933__i;}
  args = new cljs.core.IndexedSeq(G__108933__a,0);
} 
return G__108932__delegate.call(this,args);};
G__108932.cljs$lang$maxFixedArity = 0;
G__108932.cljs$lang$applyTo = (function (arglist__108934){
var args = cljs.core.seq(arglist__108934);
return G__108932__delegate(args);
});
G__108932.cljs$core$IFn$_invoke$arity$variadic = G__108932__delegate;
return G__108932;
})()
;

return null;
});
