goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26391__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26392__i = 0, G__26392__a = new Array(arguments.length -  0);
while (G__26392__i < G__26392__a.length) {G__26392__a[G__26392__i] = arguments[G__26392__i + 0]; ++G__26392__i;}
  args = new cljs.core.IndexedSeq(G__26392__a,0);
} 
return G__26391__delegate.call(this,args);};
G__26391.cljs$lang$maxFixedArity = 0;
G__26391.cljs$lang$applyTo = (function (arglist__26393){
var args = cljs.core.seq(arglist__26393);
return G__26391__delegate(args);
});
G__26391.cljs$core$IFn$_invoke$arity$variadic = G__26391__delegate;
return G__26391;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26394__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26395__i = 0, G__26395__a = new Array(arguments.length -  0);
while (G__26395__i < G__26395__a.length) {G__26395__a[G__26395__i] = arguments[G__26395__i + 0]; ++G__26395__i;}
  args = new cljs.core.IndexedSeq(G__26395__a,0);
} 
return G__26394__delegate.call(this,args);};
G__26394.cljs$lang$maxFixedArity = 0;
G__26394.cljs$lang$applyTo = (function (arglist__26396){
var args = cljs.core.seq(arglist__26396);
return G__26394__delegate(args);
});
G__26394.cljs$core$IFn$_invoke$arity$variadic = G__26394__delegate;
return G__26394;
})()
;

return null;
});
