goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27890__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27891__i = 0, G__27891__a = new Array(arguments.length -  0);
while (G__27891__i < G__27891__a.length) {G__27891__a[G__27891__i] = arguments[G__27891__i + 0]; ++G__27891__i;}
  args = new cljs.core.IndexedSeq(G__27891__a,0);
} 
return G__27890__delegate.call(this,args);};
G__27890.cljs$lang$maxFixedArity = 0;
G__27890.cljs$lang$applyTo = (function (arglist__27892){
var args = cljs.core.seq(arglist__27892);
return G__27890__delegate(args);
});
G__27890.cljs$core$IFn$_invoke$arity$variadic = G__27890__delegate;
return G__27890;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27893__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27894__i = 0, G__27894__a = new Array(arguments.length -  0);
while (G__27894__i < G__27894__a.length) {G__27894__a[G__27894__i] = arguments[G__27894__i + 0]; ++G__27894__i;}
  args = new cljs.core.IndexedSeq(G__27894__a,0);
} 
return G__27893__delegate.call(this,args);};
G__27893.cljs$lang$maxFixedArity = 0;
G__27893.cljs$lang$applyTo = (function (arglist__27895){
var args = cljs.core.seq(arglist__27895);
return G__27893__delegate(args);
});
G__27893.cljs$core$IFn$_invoke$arity$variadic = G__27893__delegate;
return G__27893;
})()
;

return null;
});
